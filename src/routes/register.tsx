import { createFileRoute } from '@tanstack/react-router';
import { MenuSense } from '@/components/MenuSense';
export const Route=createFileRoute('/register')({head:()=>({meta:[{title:'Create Account | MenuSense'},{name:'description',content:'Join MenuSense and save your food preferences.'},{property:'og:title',content:'Create Account | MenuSense'},{property:'og:description',content:'Join MenuSense and save your food preferences.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <MenuSense view="auth"/>});
