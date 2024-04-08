import supabase from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'
const options = {
    // дефолтная схема
    schema: 'public',
    headers: { 'x-my-custom-header': 'my-app-name' },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
   }
const supabase = createClient("https://zihglwlsqbzhpdjurobq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppaGdsd2xzcWJ6aHBkanVyb2JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMTA0NDMsImV4cCI6MjAyNzg4NjQ0M30.hZqB1fMJMPsIz3fjtcidux4hIXhAQFmO949PPjJpJMU", options)
   const supabaase = createClient('https://my-app.supabase.co', 'public-anon-key')
   async function registerUser({ email, password, first_name, last_name, age }) {
    try {
      const { user, session, error } = await supabase.auth.signUp({
        // обязательно
        email,
        password
      }, {
        // опционально
        data: {
          // такой синтаксис является валидным в JS
          // и более подходящим для Postgres
          first_name,
          last_name,
          age
        },
        // дефолтная настройка
        redirectTo: window.location.origin
      })
      if (error) throw error
      return { user, session }
    } catch (e) {
      throw e
    }
   }// предположим, что `registerUser` возвращает только пользователя
const onSubmit = (e) => {
    e.preventDefault()
    if (submitDisabled) return
   
    setLoading(true)
    userApi
      .registerUser(formData)
      .then(setUser)
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
   }
   async function loginUser({ email, password }) {
    try {
      const { user, session, error } = await supabase.auth.singIn({
        // обязательно
        email,
        password
      }, {
        // опционально
        returnTo: window.location.pathname
      })
      if (error) throw error
      return { user, session }
    } catch (e) {
      throw e
    }
   }
   async function logoutUser() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (e) {
      throw e
    }
   }
   const session = supabase.auth.session()
   const user = supabase.auth.user()
   async function updateUser({ email, age }) {
    try {
      const { user, error } = await supabase.auth.update({
        email
      }, {
        data: {
          age
        }
      })
      if (error) throw error
      return user
    } catch (e) {
      throw e
    }
   }
   supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)
   })
   const { data, error } = supabase.auth.api.resetPasswordForEmail(email, { redirectTo: window.location.origin })
   async function resetPassword(access_token, new_password) {
    try {
      const { data, error } = await supabase.auth.api.updateUser(access_token, { password: new_password })
      if (error) throw error
      return data
    } catch (e) {
      throw e
    }
   }