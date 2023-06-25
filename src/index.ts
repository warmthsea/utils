import FormData from 'form-data'

/**
 * 异步等待时间
 * @param timer ms
 * @returns
 */
export function utilAwaitTime(timer: number): Promise<void> {
  return new Promise((resolve) => {
    const timers: NodeJS.Timeout = setTimeout(() => {
      clearTimeout(timers)
      resolve()
    }, timer)
  })
}

export const utilDelay = (function () {
  let timer: NodeJS.Timeout
  return function (callback: () => void, ms: number | undefined) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

/** 获取文件地址后缀 */
export function utilGetSuffix(str: string): string {
  if (!str.includes('.'))
    return ''
  const fileExtension = str.substring(str.lastIndexOf('.') + 1)
  return fileExtension
}

/** Object 转化 为 FormData */
export function utilFormData<T extends Record<string, any>>(data: T): FormData {
  const formData = new FormData()
  for (const item in data)
    data[item] !== undefined && formData.append(item, data[item])

  return formData
}

/** Object 数据为空的清除 */
export function utilObjectFilter<T extends Record<string, any>>(data: T): T {
  const parData = { ...data }
  for (const item in parData) !parData[item] && delete parData[item]
  return parData
}
