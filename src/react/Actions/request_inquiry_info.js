import BunqErrorHandler from "../Helpers/BunqErrorHandler";

import { requestInquiriesSetInfo } from "./request_inquiries";

export function requestInquirySetInfo(
    request_inquiry_info,
    account_id,
    request_inquiry_id
) {
    return {
        type: "REQUEST_INQUIRY_INFO_SET_INFO",
        payload: {
            request_inquiry_info: request_inquiry_info,
            request_inquiry_id: request_inquiry_id,
            account_id: account_id
        }
    };
}

export function requestInquiryUpdate(
    BunqJSClient,
    user_id,
    account_id,
    request_inquiry_id
) {
    return dispatch => {
        dispatch(requestInquiryLoading());
        BunqJSClient.api.requestInquiry
            .get(user_id, account_id, request_inquiry_id)
            .then(requestInquiryInfo => {
                // update this item in the list and the stored data
                dispatch(
                    requestInquiriesSetInfo(
                        [requestInquiryInfo],
                        account_id,
                        false,
                        BunqJSClient
                    )
                );

                dispatch(
                    requestInquirySetInfo(
                        requestInquiryInfo,
                        account_id,
                        request_inquiry_id
                    )
                );
                dispatch(requestInquiryNotLoading());
            })
            .catch(error => {
                dispatch(requestInquiryNotLoading());
                BunqErrorHandler(
                    dispatch,
                    error,
                    "We failed to load the request information"
                );
            });
    };
}

export function requestInquiryLoading() {
    return { type: "REQUEST_INQUIRY_INFO_IS_LOADING" };
}

export function requestInquiryNotLoading() {
    return { type: "REQUEST_INQUIRY_INFO_IS_NOT_LOADING" };
}

export function requestInquiryClear() {
    return { type: "REQUEST_INQUIRY_INFO_CLEAR" };
}
