var $ = function (id) {
    return document.getElementById(id);
};

// Form Validation
var submit = function() {
    var firstName = $('first_name').value;
    var lastName = $('last_name').value;
    var emailAddress = $('email_address').value;
    var age = $('age').value;
    var dateOfBirth = $('date_of_birth').value;
    var terms = $('terms').checked;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var isValid = true;

    if (firstName == "") {
        $('first_name_error').firstChild.nodeValue =
        "This field is required";
        isValid = false;
    } else {
        $('first_name_error').firstChild.nodeValue = "";
    }

    if (lastName == "") {
        $('last_name_error').firstChild.nodeValue = 
        "This field is required";
        isValid = false;
    } else {
        $('last_name_error').firstChild.nodeValue = "";
    }

    if (emailAddress == "") {
        $('email_address_error').firstChild.nodeValue = 
        "This field is required";
        isValid = false;
    } else {
        $('email_address_error').firstChild.nodeValue = "";
    }

    if (mailFormat.test(emailAddress)) {
        document.form1.email.focus();
    }
    else {
        $('email_address_error').firstChild.nodeValue = 
        "Please enter a valid email address";
        document.form1.email.focus();
        isValid = false;
    }

    if (age == "") {
        $('age_error').firstChild.nodeValue = 
        "This field is required";
        isValid = false;
    } else {
        $('age_error').firstChild.nodeValue = "";
    }

    if (dateOfBirth == "") {
        $('date_error').firstChild.nodeValue = 
        "This field is required";
        isValid = false;
    } else {
        $('date_error').firstChild.nodeValue = "";
    }

    if (terms == false) {
        $('terms_error').firstChild.nodeValue = 
        "  This field is required";
        isValid = false;
    }

    if (isValid) {
        $('details').submit();
    }
}

window.onload = function() {
    //Header displays date

    var dt = new Date();
    document.getElementById("date").innerHTML = dt.toLocaleDateString();

	$("submit_info").onclick = submit;
	$("first_name").focus();
}
