module.exports = {
  Parse: function (input) {
      var output = {
          remove: false,
          change: false,
          value: "",

          beforeSpaces: 0,
          nextSpaces: 0
      };

      keywords = input.substr(7);
      output.value = "Ctl-Opt " + keywords.trim();

      if (output.value !== "") {
          output.change = true;
          output.value = output.value.trimRight() + ';';
      }
      return output;
  }
}