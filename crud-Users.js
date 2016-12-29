// Add Record
function addUserRecord() {
    // get values
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();

    // Add record
    $.post("ajax/addUserRecord.php", {
        first_name: first_name,
        last_name: last_name,
        email: email
    }, function (data, status) {
        // close the popup
        $("#add_new_record_modal").modal("hide");

        //actualizar UI (!?automatico)

        // clear fields from the popup
        $("#first_name").val("");
        $("#last_name").val("");
        $("#email").val("");
    });
}

function DeleteUser(id) {
    var conf = confirm("Procede Borrado?");
    if (conf == true) {
        $.post("ajax/deleteUser.php", {
                id: id
            },
            function (data, status) {
                // reload Users by using readRecords();
                $('#'+id).remove();
                //readUserRecords();
            }
        );
    }
}

function GetUserDetails(id) {
    // Add User ID to the hidden field for furture usage
    $("#hidden_user_id").val(id);
    $.post("ajax/readUserDetails.php", {
            id: id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            $("#upd_first_name").val(user.first_name);
            $("#upd_last_name").val(user.last_name);
            $("#upd_email").val(user.email);
        }
    );
    // Open modal popup

    var modal = document.getElementById('modalUpd');
    modal.style.display = "block";
}

function UpdateUserDetails() {
    // get values
    var first_name = $("#upd_first_name").val();
    var last_name = $("#upd_last_name").val();
    var email = $("#upd_email").val();

    // get hidden field value
    var id = $("#hidden_user_id").val();

    // Update the details by requesting to the server using ajax
    $.post("ajax/updateUserDetails.php", {
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email
        },
        function (data, status) {
            // hide modal popup
            $("#update_user_modal").modal("hide");
            //actualizar UI (!?automatico)
        }
    );
}
