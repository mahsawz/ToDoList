var clickCheck = false;

// Create a new list item:
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("Input").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("UL").appendChild(li);
    }
    document.getElementById("Input").value = "";

    var span_text = document.createElement("SPAN");
    span_text.className = "text";
    var content = document.createTextNode(inputValue); // input text
    span_text.appendChild(content);
    li.appendChild(span_text);

    // Add close , edit option for each item:
    var span_close = document.createElement("SPAN");
    var txt_close = document.createTextNode("\u2716"); // close icon
    var span_edit = document.createElement("SPAN");
    var txt_edit = document.createTextNode("\u270e"); // edit icon
    span_edit.className = "edit";
    span_edit.appendChild(txt_edit);
    li.appendChild(span_edit);
    span_close.className = "close";
    span_close.appendChild(txt_close);
    li.appendChild(span_close);


    // Mark as done:
    span_text.onclick = function (event) {
        if (clickCheck === false) {
            event.target.classList.toggle('checked');
        }
    };

    // Close:
    span_close.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };

    // Edit:
    span_edit.onclick = function () {
        span_text.contentEditable = 'true';
        clickCheck = true;
    };

    span_text.onblur = function () {
        span_text.contentEditable = 'false';
        clickCheck = false;
    };
}
var count = 0;
// Create more to do cards:
$("#createBtn").click(function () {
    count++;
    $("#parent").append('<div id="child" class="todo"> <input class="title" value=" To Do" maxlength="20"> <hr class="hr"> <ul class="ul" id="UL1"></ul> <div class="addInput"> <input class="input" type="text" name="input" id="Input" placeholder="To do ..." maxlength="20"> <span onclick="newElement1()" class="addBtn"> Add </span></div></div>');
});
