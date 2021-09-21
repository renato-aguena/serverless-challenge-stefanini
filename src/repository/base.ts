export interface Repository {
  create: (item: any) => Promise<any>
  update: (id: string, item: any) => Promise<any>
  delete: (id: string) => Promise<any>
  searchOne: (id: string) => Promise<any>
}
