import { createFileRoute } from '@tanstack/react-router';
import { MenuSense } from '@/components/MenuSense';
export const Route=createFileRoute('/admin')({head:()=>({meta:[{title:'Management | MenuSense'},{name:'description',content:'Manage MenuSense dishes and dining insights.'},{property:'og:title',content:'Management | MenuSense'},{property:'og:description',content:'Manage MenuSense dishes and dining insights.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <MenuSense view="admin"/>});
