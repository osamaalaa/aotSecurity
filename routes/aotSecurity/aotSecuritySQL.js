let statements ={
   getallUserPriv:{
     statement:`SELECT
                b.deleted_date,
                b.deleted_by,
                b.mobile_app,
                b.auto_disable,
                b.privilege_status,
                b.deleted,
                b.creation_date,
                b.created_by,
                b.end_date,
                b.start_date,
                b.delete_flag,
                b.update_flag,
                b.insert_flag,
                b.select_flag,
                b.user_id,
                b.sec_privilege_id,
                b.search_flag,
                b.user_priv_id,
                a.user_id,
                a.employee_id,
                a.subsidiary_id,
                a.user_name,
                a.user_password,
                a.color_patern,
                a.status,
                a.change_pass_flag,
                a.user_type,
                a.default_lang,
                a.position,
                a.login_ip,
                a.last_login_date,
                a.creation_date,
                a.created_by,
                a.deleted,
                a.deleted_by,
                a.deleted_date,
                a.application_id,
                a.user_email,
                a.user_mobile,
                a.app_email,
                a.address_box_id
            FROM
                user_privileges   b,
                users_accounts    a
            WHERE
                a.user_id = b.user_id
    `,
    bindings :[],
    qstring : "",
    requireCommit : false
  }
            }

module.exports = statements ;
