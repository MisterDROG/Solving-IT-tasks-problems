// 1. TS
//   Написать типизацию подходящую для двух объектов, не потерять типизацию "за" ключами в endpoints, то есть key:string и Record<string не подходят
//   Принять что сами ключи endpoints нам известны на этапе типизации каждого объекта: 
//   "getVtemplates" и "postVtemplates" для vtemplateObject
//   "getReports" и "putReports" для reportObject

//   const vtemplateObject:any = {
//     entity: "vtemplate",
//     endpoints: {
//         getVtemplates: {
//             method: "GET",
//             url:  "vtemplate"
//         },
//         postVtemplates: {
//             method: "POST",
//             url:  "vtemplate"
//         },
//     }
//   }
//   const reportObject:any = {
//     entity: "report",
//     endpoints: {
//         getReports: {
//             method: "GET",
//             url:  "report"
//         },
//         putReports: {
//             method: "PUT",
//             url:  "reports"
//         },
//     }
//   }


type HTTPType = "GET" | "POST" | "PUT";

type Endpoint = {
    method: HTTPType;
    url: string;
};

type VTemplateEndpoints = {
    getVtemplates: Endpoint;
    postVtemplates: Endpoint;
};

type ReportEndpoints = {
    getReports: Endpoint;
    putReports: Endpoint;
};

type GeneralType = {
    entity: string;
    endpoints: VTemplateEndpoints | ReportEndpoints;
};

const vtemplateObject: GeneralType = {
    entity: "vtemplate",
    endpoints: {
        getVtemplates: {
            method: "GET",
            url: "vtemplate",
        },
        postVtemplates: {
            method: "POST",
            url: "vtemplate",
        },
    },
};

const reportObject: GeneralType = {
    entity: "report",
    endpoints: {
        getReports: {
            method: "GET",
            url: "report",
        },
        putReports: {
            method: "PUT",
            url: "reports",
        },
    },
};