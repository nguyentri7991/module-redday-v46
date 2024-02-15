function nv_change_cat_weight(id, checksess) {
    var new_weight = $('#change_weight_' + id).val();
    $('#change_weight_' + id).prop('disabled', true);
    $.post(
        script_name + '?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=' + nv_module_name + '&' + nv_fc_variable + '=cat&nocache=' + new Date().getTime(),
        'changeweight=' + checksess + '&id=' + id + '&new_weight=' + new_weight, function(res) {
        $('#change_weight_' + id).prop('disabled', false);
        var r_split = res.split("_");
        if (r_split[0] != 'OK') {
            alert(nv_is_change_act_confirm[2]);
        }
        location.reload();
    });
}

function nv_change_cat_status(id, checksess) {
    $('#change_status' + id).prop('disabled', true);
    $.post(
        script_name + '?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=' + nv_module_name + '&' + nv_fc_variable + '=cat&nocache=' + new Date().getTime(),
        'changestatus=' + checksess + '&id=' + id, function(res) {
        $('#change_status' + id).prop('disabled', false);
        if (res != 'OK') {
            alert(nv_is_change_act_confirm[2]);
            location.reload();
        }
    });
}

function nv_delele_cat(id, checksess) {
    if (confirm(nv_is_del_confirm[0])) {
        $.post(
            script_name + '?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=' + nv_module_name + '&' + nv_fc_variable + '=cat&nocache=' + new Date().getTime(),
            'delete=' + checksess + '&id=' + id, function(res) {
            var r_split = res.split("_");
            if (r_split[0] == 'OK') {
                location.reload();
            } else {
                alert(nv_is_del_confirm[2]);
            }
        });
    }
}

function nv_change_content_status(id, checksess) {
    $('#change_status' + id).prop('disabled', true);
    $.post(
        script_name + '?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=' + nv_module_name + '&' + nv_fc_variable + '=main&nocache=' + new Date().getTime(),
        'changestatus=' + checksess + '&id=' + id, function(res) {
        $('#change_status' + id).prop('disabled', false);
        if (res != 'OK') {
            alert(nv_is_change_act_confirm[2]);
            location.reload();
        }
    });
}

function nv_delele_content(id, checksess) {
    if (confirm(nv_is_del_confirm[0])) {
        $.post(
            script_name + '?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=' + nv_module_name + '&' + nv_fc_variable + '=main&nocache=' + new Date().getTime(),
            'delete=' + checksess + '&id=' + id, function(res) {
            var r_split = res.split("_");
            if (r_split[0] == 'OK') {
                location.reload();
            } else {
                alert(nv_is_del_confirm[2]);
            }
        });
    }
}

function nv_content_action(oForm, checkss, msgnocheck) {
    var fa = oForm['idcheck[]'];
    var listid = '';
    if (fa.length) {
        for (var i = 0; i < fa.length; i++) {
            if (fa[i].checked) {
                listid = listid + fa[i].value + ',';
            }
        }
    } else {
        if (fa.checked) {
            listid = listid + fa.value + ',';
        }
    }

    if (listid != '') {
        var action = document.getElementById('action-of-content').value;
        if (action == 'delete') {
            if (confirm(nv_is_del_confirm[0])) {
                $.post(
                    script_name + '?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=' + nv_module_name + '&' + nv_fc_variable + '=main&nocache=' + new Date().getTime(),
                    'delete=' + checkss + '&listid=' + listid, function(res) {
                    var r_split = res.split("_");
                    if (r_split[0] == 'OK') {
                        location.reload();
                    } else {
                        alert(nv_is_del_confirm[2]);
                    }
                });
            }
        }
    } else {
        alert(msgnocheck);
    }
}
