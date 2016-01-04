module bowlingScore {
    interface Frame {
        first: number;
        second: number;
        score(): number;
    }

    class Roll implements Frame {
        constructor(first: number, second: number) {
            this.first = first;
            this.second = second;
        }

        first: number;
        second: number;
        score(): number { return this.first + this.second; }
    }

    class Spare implements Frame {
        constructor(first: number, nextFrame: Frame) {
            this.first = first;
            this.second = 10 - first;
            this.next = nextFrame;
        }

        next: Frame;
        first: number;
        second: number;
        score(): number { return 10 + this.next.first; }
    }

    class Strike implements Frame {
        constructor(nextFrame: Frame) {
            this.second = nextFrame.first;
            this.next = nextFrame;
        }

        next: Frame;
        first: number = 10;
        second: number;
        score(): number { return 10 + this.next.first + this.next.second }
    }

    class ParseResult {
        constructor(f: Frame, r: string) {
            this.frame = f;
            this.remaining = r;
        }

        frame: Frame;
        remaining: string;
    }

    interface Parser {
        parse(line: String): ParseResult;
    }

    class StringParser implements Parser {
        parse(line: string): ParseResult {
            if (line.startsWith("X")) {
                var remaining = this.consume(line, 1);
                return new ParseResult(new Strike(this.parse(remaining).frame), remaining)
            } else {
                if (line.length > 1 && line.charAt(1) == '/') {
                    var remaining = this.consume(line, 2)
                    return new ParseResult(new Spare(this.parseNumber(line, 1), this.parse(remaining).frame), remaining)
                } else {
                    return new ParseResult(new Roll(this.parseNumber(line, 1), this.parseNumber(line, 2)), this.consume(line, 2))
                }
            }
        }

        parseNumber(l: string, pos: number): number {
            if (l.length < pos) return 0;
            else {
                var n = l.substring(pos - 1, pos)
                if (n == "-") return 0;
                else return Number(n);
            }
        }

        consume(l: string, count: number): string {
            if (l.length <= count) return "";
            else return l.substring(count)
        }
    }

    export default class BowlingGame {
        score(line: string): number {
            var parser = new StringParser();
            var game: Array<Frame> = [];
            var remaining = line;
            do {
                var result = parser.parse(remaining);
                game.push(result.frame);
                remaining = result.remaining;
            } while (remaining.length > 0)

            var gameScore = 0;
            for (var i = 0; i < 10; i++) {
                gameScore = gameScore + game[i].score()
            }

            return gameScore;
        }
    }
}

