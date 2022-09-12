export class BaseService<T> {
    protected model: T

    constructor(TModel: T) {
        this.model = TModel;
    }
}
