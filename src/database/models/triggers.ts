import { Table, Column, Model } from 'sequelize-typescript'


@Table({ timestamps: true })
export default class Triggers extends Model<Triggers> {
  @Column
  symbol: string

  @Column
  exchange: string

  @Column
  createdAtPrice: number

  @Column
  targetPrice: number

  @Column
  uid: string

  @Column
  kind: string

  @Column
  lastTriggeredAt: Date

  @Column
  params: string

  @Column
  hasTriggered: boolean

  @Column
  closedAt: Date

  @Column
  isActive: boolean

  @Column
  orderId: string

  @Column
  amount: number
}
