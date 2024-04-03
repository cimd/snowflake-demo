export const snowflakeConnection = async () => {
  const snowflake = (<any>window).snowflake.sdk.createConnection(
    // connection options
    {
      account: import.meta.env.VITE_SNOWFLAKE_ACCOUNT,
      username: import.meta.env.VITE_SNOWFLAKE_USERNAME,
      database: 'IDSPROD',
      authenticator: 'EXTERNALBROWSER',
      warehouse: 'REPORTING_WH',
      role: 'REPORTING',
      clientSessionKeepAlive: true,
      // clientSessionKeepAliveHeartbeatFrequency: 3600
    }
  )

  try {
    await snowflake.connectAsync(
      function (err: any, conn: any) {
        if (err) {
          console.log('UNABLE to connect: ' + err.message)
          throw err
        } else {
          console.log('Successfully connected to Snowflake.')
          console.log(conn)
          // console.log(conn.getId())
        }
      }
    )
  }
  catch (error: any) {
    console.log('Snowflake Connection Error: ', error.message)
    console.error(error)
  }
  return snowflake
}
