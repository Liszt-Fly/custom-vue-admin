import _ from "lodash"
export function parseEnv(env: Record<string, string>) {
    const envs: Record<string, any> = _.cloneDeep(env)
    Object.entries(env).forEach(([key, value]) => {
        if (value === "true" || value === "fasle") {
            envs[key] = value === "true" ? true : false
        }
        if (/^\d+$/.test(value)) {
            envs[key] = parseInt(value)
        }
    })
    return envs
}