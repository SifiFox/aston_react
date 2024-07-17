import * as firebaseApi from "@/shared/api/firebase-api/firebase-api";
import * as lsApi from "@/shared/api/ls-api/ls-api";

const apiType = import.meta.env.VITE_API_TYPE;

const apis = {
    firebase: firebaseApi,
    ls: lsApi,
};

export const api = apis[apiType];
