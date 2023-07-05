import FormData from 'form-data'

/**
 * async await timer
 * @param timer ms
 * @returns Promise
 */
export function utilAwaitTime(timer: number): Promise<void> {
  return new Promise((resolve) => {
    const timers: NodeJS.Timeout = setTimeout(() => {
      clearTimeout(timers)
      resolve()
    }, timer)
  })
}

/** delay */
export const utilDelay = (function () {
  let timer: NodeJS.Timeout
  return function (callback: () => void, ms: number | undefined) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

/** get the filename suffix */
export function utilGetSuffix(str: string): string {
  if (!str.includes('.'))
    return ''
  const fileExtension = str.substring(str.lastIndexOf('.') + 1)
  return fileExtension
}

/** object to FormData Data */
export function utilFormData<T extends Record<string, any>>(data: T): FormData {
  const formData = new FormData()
  for (const item in data)
    data[item] !== undefined && formData.append(item, data[item])

  return formData
}

/** delete the key whose key value is empty in the object */
export function utilObjectFilter<T extends Record<string, any>>(data: T): T {
  const parData = { ...data }
  for (const item in parData) {
    if (!parData[item] && parData[item] !== false && parData[item] !== 0)
      delete parData[item]
  }
  return parData
}

/** file Blob download */
export function utilDownBlobFile(file: Blob, fileName: string) {
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(new Blob([file]))
  link.style.display = 'none'
  link.target = '_blank'
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/** Array Object Includes Object */
export function utilObjectArrayIncludes<T extends Record<string, any>>(list: Array<T>, item: T, key?: keyof T): boolean {
  return list.some(i => key
    ? JSON.stringify(i[key]) === JSON.stringify(item[key])
    : JSON.stringify(i) === JSON.stringify(item),
  )
}
