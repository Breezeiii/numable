import { __default } from "./variable";

export default function (numberal: any): void {
  (function () {
    numberal.register("local", __default.currentLocal, {
      decimal: ".",
      delimiter: ","
    });
  })();

  (function () {
    numberal.register("format", "percent", {
      regexps: {
        format: /(%)/
      },
      format: function (value: number, pattern: string = ""): string {
        const scalePercentByValue: number = 100;

        return numberal._.numberToFormat(value * scalePercentByValue, pattern);
      }
    });
  })();

  (function () {
    numberal.register("format", "time", {
      regexps: {
        format: /([hms]{1,}:*)/
      },
      format: function (value: number, pattern: string = ""): string {
        let hours = Math.floor(value / 60 / 60),
          minutes = Math.floor((value - hours * 60 * 60) / 60),
          seconds = Math.round(value - hours * 60 * 60 - minutes * 60);

        const __h = String(hours < 10 ? "0" + hours : hours);
        const __m = String(minutes < 10 ? "0" + minutes : minutes);
        const __s = String(seconds < 10 ? "0" + seconds : seconds);

        return pattern
          .replace(/h+/, __h)
          .replace(/m+/i, __m)
          .replace(/s+/i, __s);
      }
    });
  })();
}
