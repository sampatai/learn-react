import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", function (e) {
        callback(e);
      });

      return function () {
        document.removeEventListener("keydown", function (e) {
          callback(e);
        });
      };
    },
    [key, action]
  );
}
