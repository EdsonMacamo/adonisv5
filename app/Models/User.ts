import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { beforeCreate } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {

  public static table = 'users'
  @column({ isPrimary: true })
  public id: number

  @column()
  public secure_id: uuidv4
  @column()
  public email:string

  @column()
  public password:string

  @column()
  public avatarUrl:string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public last_login: DateTime

  @beforeCreate()
  public static assignUuid(user: User) {
    user.secure_id = uuidv4()
  }
  
}
