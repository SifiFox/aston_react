import cls from "./app-form.module.scss"

export const AppForm = ({ children }: { children: JSX.Element }) => {
    return <div className={cls.form}>{children}</div>
}
