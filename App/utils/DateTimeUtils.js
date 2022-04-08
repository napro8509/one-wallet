import { DateTimeFormatter } from '@js-joda/core'

const FormatDateTime = (ldt, pattern) => {
    return ldt.format(DateTimeFormatter.ofPattern(pattern))
}

export { FormatDateTime }
