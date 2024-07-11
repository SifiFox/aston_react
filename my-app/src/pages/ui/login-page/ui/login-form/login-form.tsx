import { RoutePath } from "@/shared/config/route-config/route-config"
import { GoogleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input } from "antd"
import { Link } from "react-router-dom"

interface LoginFormProps {
    formAction: (values) => void
    loginGoogle: () => void
}

export type Strings = Record<string, string>

export const LoginForm = ({ formAction, loginGoogle }: LoginFormProps) => {
    const [form] = Form.useForm()

    const onFinish = (values: Strings) => {
        formAction(values)
    }

    return (
        <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите ваш e-mail!",
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="email"
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
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button
                    type="default"
                    htmlType="submit"
                    block
                    className="login-form-button"
                >
                    Войти
                </Button>
                или <Link to={RoutePath.registration}>зарегистрироваться</Link>
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
