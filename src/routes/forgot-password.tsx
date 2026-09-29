import { createFileRoute } from '@tanstack/react-router';
import { MenuSense } from '@/components/MenuSense';
export const Route=createFileRoute('/forgot-password')({head:()=>({meta:[{title:'Forgot Password | MenuSense'},{name:'description',content:'Request a secure password reset link for MenuSense.'},{property:'og:title',content:'Forgot Password | MenuSense'},{property:'og:description',content:'Request a secure password reset link for MenuSense.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <MenuSense view="auth"/>});
