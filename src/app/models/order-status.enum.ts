/**
 * NOTE: In a real world, we could a lot of statuses, like pending, but
 * in this case we avoid those cases because it is not necessary
 */
export enum OrderStatus {
  CANCELLED = 'Cancelled',
  APPROVED = 'Approved'
}
