import { config } from '@/config'
import './index.scss'

class Layout {
    constructor() {
        this.init()
    }

    init() {
        console.log('layout init')
        console.log('config:', config)
        console.log('env:', process.env)
    }
}

new Layout()
