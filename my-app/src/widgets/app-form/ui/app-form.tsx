import cls from './app-form.module.scss'

export const AppForm = ({children}) => {
    return (
        <div className={cls.form}>
            {children}
        </div>
    )
}