const Joi = require('joi');

let result;

const assetsdefinition = Joi.object().keys(
    {
        ASSET_ID: Joi.required()
    }
);

const employeesSt = Joi.object().keys(
    {
        EMPLOYEE_ID: Joi.required()
    }
);
const lookUpAppsST = Joi.object().keys(

    {

        LOOKUP_APP_ID: Joi.required(),
        LOOKUP_MASTER_ID: Joi.required(),
        APPLICATION_ID: Joi.required()

    }
);

const lookUpDetailsSt = Joi.object().keys(
    {
        LOOK_APP_ID: Joi.required(),
        LOOKUP_DETAIL_ID: Joi.required()

    }
);


const projectsSt = Joi.object().keys(
    {
        PROJECT_ID: Joi.required()

    }
);

const violationGroupSt = Joi.object().keys(
    {
        VIOLATION_GROUP_ID: Joi.required()

    }
);

const violationGroupDetailsSt = Joi.object().keys(
    {
        VIOLATION_GROUP_ID: Joi.required()

    }
);


const issues = Joi.object().keys(
        {
            ISSUE_ID: Joi.required()
        }
    );

    const issuesassignments = Joi.object().keys(
        {
            ASSIGNMENT_ID: Joi.required()
        }
    );

    const issuesattachments = Joi.object().keys(
        {
            ATTACH_ID: Joi.required()
        }
    );

    const issuescomments = Joi.object().keys(
        {
            COMMENT_ID: Joi.required()
        }
    );

    const issuescustomvalue = Joi.object().keys(
        {
            ISSUE_ID: Joi.required()
        }
    );

    const issuessubclasscustomfiles = Joi.object().keys(
        {
            ISSUES_SUB_CLASS_ID: Joi.required()
        }
    );

    const issuessubclassification = Joi.object().keys(
        {
            CLASSIFICATION_ID: Joi.required()
        }
    );
    const locationsSt = Joi.object().keys(
        {
            LOCATION_ID: Joi.required()
        }
    );

    const uploadimagestructure = Joi.object().keys(
        {
            APP_ID: Joi.required(),
            EMP_ID: Joi.required()
        }
    );
    
    
    function validatetokenstructure(req, res, next) {
        result = Joi.validate(req.body, tokenstructure);
        if (result.error == null) {
            next();
        } else {
            res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
        }
    }
    

    function validatelocationSt(req, res, next) {
        result = Joi.validate(req.body, locationsSt);
        if (result.error == null) {
            next();
        } else {
            res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
        }
    }
    

  function issuesStructure(req, res, next) {
    result = Joi.validate(req.body, issues);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}




function issuesassignmentsStructure(req, res, next) {
    result = Joi.validate(req.body, issuesassignments);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function issuesattachmentsStructure(req, res, next) {
    result = Joi.validate(req.body, issuesattachments);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function issuescustomvalueStructure(req, res, next) {
    result = Joi.validate(req.body, issuescustomvalue);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function issuescommentsStructure(req, res, next) {
    result = Joi.validate(req.body, issuescomments);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function issuessubclasscustomfilesStructure(req, res, next) {
    result = Joi.validate(req.body, issuessubclasscustomfiles);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function issuessubclassificationStructure(req, res, next) {
    result = Joi.validate(req.body, issuessubclassification);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}



function validateviolationGroupDetailsSts(req, res, next) {
    result = Joi.validate(req.body, violationGroupSt);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function validateviolationGroupSt(req, res, next) {
    result = Joi.validate(req.body, violationGroupSt);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}


function validateprojectsSt(req, res, next) {
    result = Joi.validate(req.body, projectsSt);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}




function validatelookUpDetailsSt(req, res, next) {
    result = Joi.validate(req.body, lookUpDetailsSt);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}


function validatelookUpAppsSt(req, res, next) {
    result = Joi.validate(req.body, lookUpAppsST);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}


function validateemployessSt(req, res, next) {
    result = Joi.validate(req.body, employeesSt);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}

function assetsdefinitionStructure(req, res, next) {
    result = Joi.validate(req.body, assetsdefinition);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}


function validateuploadimagestructure(req, res, next) {

    result = Joi.validate(req.params, uploadimagestructure);
    if (result.error == null) {
        next();
    } else {
        res.status(400).json({ "error": "invalid payload request Structure, please verify service catalog !" });
    }
}



module.exports = {
    assetsdefinitionStructure: assetsdefinitionStructure,
    validateemployessSt: validateemployessSt,
    validatelocationSt: validatelocationSt,
    validatelookUpAppsSt: validatelookUpAppsSt,
    validatelookUpDetailsSt: validatelookUpDetailsSt,
    validateprojectsSt: validateprojectsSt,
    validateviolationGroupSt: validateviolationGroupSt,
    validateviolationGroupDetailsSts: validateviolationGroupDetailsSts,
    issuesStructure: issuesStructure,
    issuesassignmentsStructure: issuesassignmentsStructure,
    issuesattachmentsStructure: issuesattachmentsStructure,
    issuescommentsStructure: issuescommentsStructure,
    issuescustomvalueStructure:issuescustomvalueStructure,
    issuessubclasscustomfilesStructure: issuessubclasscustomfilesStructure,
    issuessubclassificationStructure: issuessubclassificationStructure,
    validateuploadimagestructure : validateuploadimagestructure
  };
