import { RoutePath } from "@/shared/config/route-config/route-config"
import { GoogleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import { Link } from "react-router-dom"

export const RegistrationForm = ({ formAction, loginGoogle }) => {
    const [form] = Form.useForm()
    const onFinish = values => {
        formAction(values)
    }

    return (
        <Form
            name="registration"
            className="registration-form"
            onFinish={onFinish}
            autoComplete="off"
            form={form}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите вашу почту!",
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="E-mail"
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите ваш пароль!",
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Пароль"
                />
            </Form.Item>

            <Form.Item
                name="password2"
                dependencies={["password"]}
                rules={[
                    {
                        required: true,
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject(
                                new Error(
                                    "The new password that you entered do not match!",
                                ),
                            )
                        },
                    }),
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Повторите пароль"
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type="default"
                    htmlType="submit"
                    block
                    className="login-form-button"
                >
                    Регистрация
                </Button>
                или <Link to={RoutePath.login}>войти сейчас</Link>
            </Form.Item>
            {import.meta.env.VITE_API_TYPE === "firebase" && (
                <Form.Item>
                    <Button
                        onClick={loginGoogle}
                        type="default"
                        htmlType="button"
                        block
                        className="login-form-button"
                    >
                        <GoogleOutlined />
                        Войти через google
                    </Button>
                </Form.Item>
            )}
        </Form>
    )
}
