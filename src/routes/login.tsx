import { createFileRoute } from '@tanstack/react-router';
import { MenuSense } from '@/components/MenuSense';
export const Route=createFileRoute('/login')({head:()=>({meta:[{title:'Sign In | MenuSense'},{name:'description',content:'Sign in to MenuSense to save your favorite dishes.'},{property:'og:title',content:'Sign In | MenuSense'},{property:'og:description',content:'Sign in to MenuSense to save your favorite dishes.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <MenuSense view="auth"/>});
