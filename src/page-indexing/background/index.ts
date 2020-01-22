import StorageManager from '@worldbrain/storex'
import PageStorage from './storage'

export class PageIndexingBackground {
    storage: PageStorage

    constructor(options: { storageManager: StorageManager }) {
        this.storage = new PageStorage({
            storageManager: options.storageManager,
        })
    }
}
