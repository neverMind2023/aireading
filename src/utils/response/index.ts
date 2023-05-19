enum StatusCode {
    RESOLVED = 200,
    REJECTED = 30000,
}

export class ResponseWrapper<TData = any>{
    public code: StatusCode;
    public data: TData;
    public message?: string;
    constructor(code: StatusCode, data: TData, message?: string) {
        this.code = code;
        this.data = data;
        //如果传了message就用传的，如果没传就用默认的
        this.message = message ?? (code === StatusCode.RESOLVED ? 'Success' : 'Failed');
    }
}

export class ResponseResolve<TData = any> extends ResponseWrapper<TData>{
    constructor(data: TData, message?: string) {
        super(StatusCode.RESOLVED, data, message);
    }
}


export class ResponseReject<TData = any> extends ResponseWrapper<TData>{
    constructor(data: TData, message?: string) {
        super(StatusCode.REJECTED, data, message);
    }
}

//这个是返回的数据类型
export type ResponseUnion<TData> = Promise<ResponseResolve<TData> | ResponseReject<TData>>;