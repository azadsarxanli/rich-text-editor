var form = document.querySelector("form");
var textarea = document.querySelector("#textarea");
//when user click the bold button, add a textarea's selected content ** ** sign
document.querySelector("#add-btn").addEventListener("click", function () {
  var textarea = document.querySelector("#textarea");
  var selection = textarea.value.substring(
    textarea.selectionStart,
    textarea.selectionEnd
  );
  textarea.value = `${textarea.value.substring(
    0,
    textarea.selectionStart
  )}** ${selection}**${textarea.value.substring(textarea.selectionEnd)}`;
});
// when user click the italic button, add a textarea's selected content _ _ sign
document.querySelector("#italic-btn").addEventListener("click", function () {
  var textarea = document.querySelector("#textarea");
  var selection = textarea.value.substring(
    textarea.selectionStart,
    textarea.selectionEnd
  );
  textarea.value = `${textarea.value.substring(
    0,
    textarea.selectionStart
  )}* ${selection}*${textarea.value.substring(textarea.selectionEnd)}`;
});
// when user click the underline button, add a textarea's selected content __ __ sign
document.getElementById("underline-btn").addEventListener("click", function () {
  var textarea = document.getElementById("textarea");
  var selection = textarea.value.substring(
    textarea.selectionStart,
    textarea.selectionEnd
  );
  textarea.value =
    textarea.value.substring(0, textarea.selectionStart) +
    "__ " +
    selection +
    "__" +
    textarea.value.substring(textarea.selectionEnd);
});
// when user click the add-img-btn, add a textarea's selected content ![](img)
document.getElementById("add-img-btn").addEventListener("click", function () {
  var textarea = document.getElementById("textarea");
  var selection = textarea.value.substring(
    textarea.selectionStart,
    textarea.selectionEnd
  );
  textarea.value =
    textarea.value.substring(0, textarea.selectionStart) +
    "![img-description" +
    selection +
    "](img-url)" +
    textarea.value.substring(textarea.selectionEnd);
});
// when user click the add-link-btn, add a textarea's selected content [](link)
document.getElementById("add-link-btn").addEventListener("click", function () {
  var textarea = document.getElementById("textarea");
  var selection = textarea.value.substring(
    textarea.selectionStart,
    textarea.selectionEnd
  );
  textarea.value =
    textarea.value.substring(0, textarea.selectionStart) +
    "[link-description" +
    selection +
    "](link-url)" +
    textarea.value.substring(textarea.selectionEnd);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.querySelector("#textarea").value;
  // if name is empty, don't send request
  if (name === "") {
    return;
  } else {
    // if name includes any html tag remove it and send request
    var name = name.replace(/<[^>]*> /g, "");
    // if name includes ** ** then make it bold
    if (name.indexOf("**") !== -1) {
      name = name.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    }
    // if name includes * * then make it italic
    if (name.indexOf("*") !== -1) {
      name = name.replace(/\*(.*?)\*/g, "<i>$1</i>");
    }
    // if name includes __ __ then make it underlined
    if (name.indexOf("__") !== -1) {
      name = name.replace(/__(.*?)__/g, "<u>$1</u>");
    }
    // if name includes ~~ ~~ then make it striked
    if (name.indexOf("~~") !== -1) {
      name = name.replace(/~~(.*?)~~/g, "<s>$1</s>");
    }

    // if name includes ``` then make it code block
    if (name.indexOf("```") !== -1) {
      name = name.replace(/```(.*?)```/g, "<pre>$1</pre>");
    }
    // if name includes ` ` then make it code
    if (name.indexOf("`") !== -1) {
      name = name.replace(/`(.*?)`/g, "<code>$1</code>");
    }

    // if users click enter key, add <br> tag
    if (name.indexOf("\n") !== -1) {
      name = name.replace(/\n/g, "<br>");
    }
    // if name includes [ ] then make it link e.g [link text](link url)

    // if name includes { } then make it blockquote e.g {blockquote text}
    if (name.indexOf("{") !== -1) {
      name = name.replace(/\{(.*?)\}/g, "<blockquote>$1</blockquote>");
    }
    // if name includes # # then make it heading e.g # heading text # e.g # heading text #
    if (name.indexOf("#") !== -1) {
      name = name.replace(/\#(.*?)\#/g, "<h1>$1</h1>");
    }
    // if name includes img then make it image e.g ![alt text](image url)
    if (name.indexOf("![") !== -1) {
      name = name.replace(/\!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">');
    }
    if (name.indexOf("[") !== -1) {
      name = name.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    }
    // if name

    var container = document.querySelector(".container");

    var p = document.createElement("p");

    p.innerHTML = name;
    container.appendChild(p);
    // add tel number
    var p = document.createElement("p");
  }

  // clear textarea
  document.querySelector("#textarea").value = "";
  // clear tel input
});
