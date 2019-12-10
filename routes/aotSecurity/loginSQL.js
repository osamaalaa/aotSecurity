let statements = {
  login: {
  statement : `SELECT
                      user_id,
                      employee_id,
                      subsidiary_id,
                      user_name,
                      user_password,
                      color_patern,
                      status,
                      change_pass_flag,
                      user_type,
                      default_lang,
                      position,
                      login_ip,
                      last_login_date,
                      creation_date,
                      created_by,
                      deleted,
                      deleted_by,
                      deleted_date,
                      application_id,
                      user_email,
                      user_mobile,
                      app_email,
                      address_box_id
                  FROM
                      users_accounts
                  WHERE USER_PASSWORD = :USER_PASSWORD`,
  bindings: [],
  qstring: "",
  requireCommit: false
  },
  privileges: {
  statement : `SELECT
                    sec_privilege_id,
                    user_id,
                    select_flag,
                    insert_flag,
                    update_flag,
                    delete_flag,
                    start_date,
                    end_date,
                    created_by,
                    creation_date,
                    deleted,
                    privilege_status,
                    auto_disable,
                    mobile_app,
                    deleted_by,
                    deleted_date,
                    user_priv_id,
                    search_flag
                FROM
                    user_privileges`,
  bindings: [],
  qstring: "",
  requireCommit: false
},
insertLogin: {
        statement: `
        INSERT INTO users_accounts (
                              user_id,
                              employee_id,
                              subsidiary_id,
                              user_name,
                              user_password,
                              color_patern,
                              status,
                              change_pass_flag
                              ) VALUES (
                                USERS_ACCOUNTS_SEQ.NEXTVAL,
                                10000,
                                1,
                                osama,
                                :USER_PASSWORD,
                                1,
                                1,
                                1
                              )
         RETURN USER_NAME , USER_PASSWORD INTO :R_USER_NAME, :R_USER_PASSWORD`,
        returns: ["R_USER_NAME", "R_USER_PASSWORD"],
        bindings: [],
        qstring: "",
        requireCommit: true
    }

};

module.exports = statements;
