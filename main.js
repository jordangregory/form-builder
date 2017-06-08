var formData = [
  {
    type: "text",
    label: "First Name",
    id: "user-first-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "text",
    label: "Last Name",
    id: "user-last-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "email",
    label: "Email Address",
    id: "user-email",
    icon: "fa-envelope",
    options: []
  },
  {
    type: "text",
    label: "Current website url",
    id: "user-website",
    icon: "fa-globe",
    options: []
  },
  {
    type: "select",
    label: "Select Language",
    id: "user-language",
    icon: "",
    options: [
      {
        label: "English",
        value: "EN"
      },
      {
        label: "French",
        value: "FR"
      },
      {
        label: "Spanish",
        value: "SP"
      },
      {
        label: "Chinese",
        value: "CH"
      },
      {
        label: "Japanese",
        value: "JP"
      }
    ]
  },
  {
    type: "textarea",
    label: "Your Comment",
    id: "user-comment",
    icon: "fa-comments",
    options: []
  },
  {
    type: "tel",
    label: "Mobil Number",
    id: "user-mobile",
    icon: "fa-mobile-phone",
    options: []
  },
  {
    type: "tel",
    label: "Home Number",
    id: "user-phone",
    icon: "fa-phone",
    options: []
  }
];

function buildForm() {
  var formInputsWrapper = document.querySelector("#formInputsWrapper");

  //With the above form data, "forEach" run this function.
  formData.forEach(function(element, index, array) {
    //if it's a text area, we're not making an input, because textareas are not inputs
    if (elements.type === "textarea") {
    } else {
      //for everything else, we're making an input
      var newInputElem = document.createElement("input");
      newInputElem.setAttribute("type", element.type);
      formInputsWrapper.appendChild(newInputElem);
    }
  });
}
