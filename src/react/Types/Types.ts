export type Amount = Balance;

export type AccountType =
    | "MonetaryAccountLight"
    | "MonetaryAccountBank"
    | "MonetaryAccountJoint";

export type Avatar = {
    uuid: string;
    anchor_uuid: string;
    image: Image[];
};

export type Address = {
    street: string;
    house_number: string;
    po_box: string;
    postal_code: string;
    city: string;
    country: string;
    province: string;
};

export type AllCoOwnerItem = {
    alias: ExtendedAlias[];
    status: "ACCEPTED" | "REJECTED" | "PENDING" | "REVOKED";
};

export type AllCoOwner = AllCoOwnerItem[];

export type Alias = {
    type: "EMAIL" | "PHONE_NUMBER" | "IBAN";
    value: string;
    name: string;
};

export type Attachment = {
    id: number;
    monetary_account_id: number;
};
export type AttachmentList = Attachment[];

export type Balance = {
    value: string;
    currency: "EUR";
};

export type ExtendedAlias = Alias & {
    public_nick_name: string;
    display_name: string;
    country: string;
};

export type Geolocation = {
    latitude: number;
    longitude: number;
    altitude: number;
    radius: number;
};

export type Image = {
    attachment_public_uuid: string;
    content_type: "image/jpeg" | "image/png";
    height: number;
    width: number;
};

export type MonetaryAccountSetting = {
    color: string;
    default_avatar_status:
        | "AVATAR_DEFAULT"
        | "AVATAR_CUSTOM"
        | "AVATAR_UNDETERMINED";
    restriction_chat: "ALLOW_INCOMING" | "BLOCK_INCOMING";
};

export type PaymentAlias = {
    iban: string;
    display_name: string;
    avatar: Avatar;
    label_user: ExtendedAlias;
    country: string;
    bunq_me: Alias;
    is_light: boolean;
    siwft_bic: null | string;
    switft_account_number: null | string;
};

export type PaymentSubType =
    | "PAYMENT"
    | "WITHDRAWAL"
    | "REVERSAL"
    | "REQUEST"
    | "BILLING"
    | "SCT"
    | "SDD"
    | "NLO";

export type PaymentType =
    | "BUNQ"
    | "EBA_SCT"
    | "EBA_SDD"
    | "IDEAL"
    | "SWIFT"
    | "FIS";

export type RequestReferenceSplitTheBill = {
    type: "RequestInquiry" | "RequestInquiryBatch";
    id: number;
};

import RuleCollection from "./RuleCollection";

// an object filled with ruleCollections with the ruleCollectionId as a key
export type RuleCollectionList = {
    [key: string]: RuleCollection;
};

// all valid rule types
export type RuleTypes = "VALUE" | "TRANSACTION_AMOUNT" | "ITEM_TYPE";
