const Joi = require('joi');


let result;

const tokenstructure = Joi.object().keys(
    {
        USERNAME: Joi.required(),
        PASSWORD: Joi.required()
    }
);


const loginstructure = Joi.object().keys(
    {
        USERNAME: Joi.required(),
        PASSWORD: Joi.required()
    }
);

const newrequeststructure = Joi.object().keys(
    {
        REQUEST_TYPE: Joi.required(),
        DESCRIPTION: Joi.required(),
        DELETED: Joi.required(),
        SUBSIDIARY_ID: Joi.required(),
        CLASSIFICATION_ID: Joi.required(),
        EMPLOYEE_ID: Joi.required()
    }
);

const newrequeststructureincaseofobjection = Joi.object().keys(
    {
        REQUEST_TYPE: Joi.required(),
        DESCRIPTION: Joi.required(),
        DELETED: Joi.required(),
        SUBSIDIARY_ID: Joi.required(),
        CLASSIFICATION_ID: Joi.required(),
        EMPLOYEE_ID: Joi.required(),
        REJECTED_REQUEST: Joi.required()
    }
);

const newactionstructure = Joi.object().keys(
    {
        REQUEST_ID: Joi.required(),
        ACTION_ID: Joi.required(),
        FROM_DESTINATION_ID: Joi.required(),
        COMMENT: Joi.required()
    }
);

const approvestructure = Joi.object().keys(
    {
        REQUEST_ID: Joi.required(),
        ACTION_ID: Joi.required(),
        FROM_DESTINATION_ID: Joi.required(),
        COMMENT: Joi.required()
    }
);

const rejectstructure = Joi.object().keys(
    {
        "REQUEST_ID": Joi.required(),
        "ACTION_ID": Joi.required(),
        "FROM_DESTINATION_ID": Joi.required(),
        "COMMENT": Joi.required()
    }
);

const acknowledgestructure = Joi.object().keys(
    {
        "REQUEST_ID": Joi.required(),
        "STEP_ID": Joi.required(),
        "FROM_DESTINATION_ID" : Joi.required()
    }
);

const askothersreq=Joi.object().keys(
    {
        REQUEST_ID:Joi.required(),
        ACTION_USER_ID:Joi.required(),
        OUTCOME_ACTION_ID:Joi.required(),
        TRANACTION_ID:Joi.required(),
        COMMENTS:Joi.required(),
        ACTION_USER_ID:Joi.required(),
        TO_DESTINATION_ID:Joi.required()
    }
)
const askothersreplyreq=Joi.object().keys(
    {
        ACTION_USER_ID:Joi.required(),
        OUTCOME_ACTION_ID:Joi.required(),
        TRANACTION_ID:Joi.required(),
        TRANACTION_ID:Joi.required(),
        ANSWER_ON_QUES:Joi.required()

    }
)
function validatetokenstructure(req, res, next) {
    result = Joi.validate(req.body, tokenstructure);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function validateloginstructure(req, res, next) {
    result = Joi.validate(req.body, loginstructure);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function validatenewrequeststructure(req, res, next) {
    if (req.body.REQUEST_TYPE != exceptions.objection) {
        result = Joi.validate(req.body, newrequeststructure);
    } else {
        result = Joi.validate(req.body, newrequeststructureincaseofobjection);
    }
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function validatenewactionstructure(req, res, next) {
    result = Joi.validate(req.body, newactionstructure);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function validateapprovestructure(req, res, next) {
    result = Joi.validate(req.body, approvestructure);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function validaterejectstructure(req, res, next) {
    result = Joi.validate(req.body, rejectstructure);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}
function validateaskotherreq(req, res, next) {
    result = Joi.validate(req.body, askothersreq);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}
function validateaskothersreplyreq(req, res, next) {
    result = Joi.validate(req.body, askothersreplyreq);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}


function validateacknowledgestructure(req, res, next) {
    result = Joi.validate(req.body, acknowledgestructure);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

module.exports = {
    validatetokenstructure: validatetokenstructure,
    validatenewrequeststructure: validatenewrequeststructure,
    validatenewactionstructure: validatenewactionstructure,
    validateapprovestructure: validateapprovestructure,
    validaterejectstructure: validaterejectstructure,
    validateacknowledgestructure : validateacknowledgestructure,
    validateaskotherreq:validateaskotherreq,
    validateaskothersreplyreq:validateaskothersreplyreq,
    validateloginstructure: validateloginstructure
};
