'use client'

import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    }
  })

  const onSubmit = (values: unknown) => {
    console.log("表单提交:", values)
    // 添加实际登录逻辑
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>用户名</FormLabel>
              <FormControl>
                <Input
                  placeholder="请输入用户名"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e)
                    if (e.target.value.length < 2) {
                      form.setError('username', {
                        type: 'manual',
                        message: '用户名至少2个字符'
                      })
                    } else {
                      form.clearErrors('username')
                    }
                  }}
                  aria-invalid={!!form.formState.errors.username}
                />
              </FormControl>
              {form.formState.errors.username && (
                <p role="alert" className="text-sm text-red-500">
                  {form.formState.errors.username.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>密码</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="请输入密码"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e)
                    if (e.target.value.length < 6) {
                      form.setError('password', {
                        type: 'manual',
                        message: '密码至少6个字符'
                      })
                    } else {
                      form.clearErrors('password')
                    }
                  }}
                  aria-invalid={!!form.formState.errors.password}
                />
              </FormControl>
              {form.formState.errors.password && (
                <p role="alert" className="text-sm text-red-500">
                  {form.formState.errors.password.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          登录
        </Button>
      </form>
    </Form>
  )
}