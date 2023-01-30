/**
 * NOTE: In a real world, we could a lot of statuses, like pending or delivered,
 * but in this case we avoid those cases because it is not necessary
 */
export enum OrderStatus {
  CANCELLED = 'Cancelled',
  EDITING = 'Editing',
  APPROVED = 'Approved'
}
