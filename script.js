let add_todo_btn = document.getElementById("add-btn");
let todo_input = document.getElementById("todo-input");
let list = document.getElementById("list");

add_todo_btn.addEventListener("click", function () {
  let todo = todo_input.value;

  // todo item
  let item = document.createElement("div");
  item.classList.add("item");

  // todo text on list
  let item_text = document.createElement("div");
  item_text.classList.add("item-text");
  item_text.textContent = todo;

  // edit input field
  let edit_input = document.createElement("input");
  edit_input.classList.add("edit-input");
  edit_input.classList.add("hide");
  edit_input.name = "edit_input";
  edit_input.type = "text";
  edit_input.value = todo;

  // update button
  let edit_input_btn = document.createElement("button");
  edit_input_btn.textContent = "UPDATE";
  edit_input_btn.classList.add("action-btn");
  edit_input_btn.classList.add("update-btn");
  edit_input_btn.classList.add("hide");
  edit_input_btn.type = "button";

  // div for buttons
  let action_btns = document.createElement("div");
  action_btns.classList.add("action-btns");

  // edit button
  let edit_btn = document.createElement("button");
  edit_btn.classList.add("action-btn");
  edit_btn.classList.add("edit-btn");
  edit_btn.textContent = "EDIT";

  // edit todos
  edit_btn.addEventListener("click", function () {
    edit_input.classList.remove("hide");
    item_text.classList.add("hide");
    edit_input_btn.classList.remove("hide");
    remove_btn.classList.add("hide");
    edit_btn.classList.add("hide");

    edit_input_btn.addEventListener("click", function () {
      item_text.textContent = edit_input.value;
      edit_input.classList.add("hide");
      item_text.classList.remove("hide");
      remove_btn.classList.remove("hide");
      edit_btn.classList.remove("hide");
      edit_input_btn.classList.add("hide");
    });
  });

  // remove button
  let remove_btn = document.createElement("button");
  remove_btn.classList.add("action-btn");
  remove_btn.classList.add("remove-btn");
  remove_btn.textContent = "REMOVE";

  // remove todos
  remove_btn.addEventListener("click", function () {
    item.parentNode.removeChild(item);
  });

  // append
  action_btns.append(edit_input_btn);
  action_btns.append(edit_btn);
  action_btns.append(remove_btn);

  item.append(item_text);
  item.append(edit_input);
  item.append(action_btns);

  list.append(item);

  // clear input after adding
  todo_input.value = "";
});
