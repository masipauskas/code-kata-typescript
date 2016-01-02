module fizzBuzz {
    interface Printer {
        canHandle(n: number): boolean
        handle(n: number): string
    }

    class DefaultPrinter implements Printer {
        canHandle(n: number): boolean { return true; }
        handle(n: number): string { return n.toLocaleString(); }
    }

    class FizzPrinter implements Printer {
        canHandle(n: number): boolean { return n % 3 == 0; }
        handle(n: number): string { return "Fizz"; }
    }

    class BuzzPrinter implements Printer {
        canHandle(n: number): boolean { return n % 5 == 0; }
        handle(n: number): string { return "Buzz"; }
    }

    class WhizzPrinter implements Printer {
        canHandle(n: number): boolean { return n % 7 == 0; }
        handle(n: number): string { return "Whizz"; }
    }

    class FizzBuzzPrinter implements Printer {
        private fizz: Printer = new FizzPrinter();
        private buzz: Printer = new BuzzPrinter();

        canHandle(n: Number): boolean { return this.fizz.canHandle(n) && this.buzz.canHandle(n); }
        handle(n: number): string {
            return this.fizz.handle(n) + this.buzz.handle(n);
        }
    }

    export default class Buzzer {
        handlers: Array<Printer> = [
            new FizzBuzzPrinter(),
            new FizzPrinter(),
            new BuzzPrinter(),
            new WhizzPrinter(),
            new DefaultPrinter()
        ];

        private handle(n: number): String {
            for (var h in this.handlers) {
                var handler = this.handlers[h]
                if (handler.canHandle(n)) {
                    return handler.handle(n);
                }
            }

            return "Unhandled: " + n
        }

        run(n: number): Array<String> {
            var result: Array<String> = [];

            for (var i = 1; i <= n; i++) {
                result.push(this.handle(i));
            }

            return result;
        }
    }
}