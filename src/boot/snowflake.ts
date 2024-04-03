import { boot } from 'quasar/wrappers'
import { snowflakeConnection } from 'src/connections/snowflake'

let snowflake: any
console.log('boot file')
export default boot(async ({ app }): Promise<void> => {
  snowflake = await snowflakeConnection()
  app.config.globalProperties.$snowflake = snowflake
})

export { snowflake }
