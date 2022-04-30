import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
 
  public async run () {
    const uniqueKey = 'email'
    await User.updateOrCreateMany(uniqueKey,[
      {
        email: 'vihrkr@adonisjs.com',
        password: 'secreht',
      },
      {
        email: 'rorhain@adonisjs.com',
        password: 'superhsecret'
      },
      {
        email: 'romhrffffain@adonisjs.com',
        password: 'supffferhsrecret'
      }
    ])
  }

}
