"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4760],{9507:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=o(4848),t=o(8453);const i={id:"memory",sidebar_label:"Memory",title:"Managing memory usage of Garnet"},r="Memory Usage",c={id:"getting-started/memory",title:"Managing memory usage of Garnet",description:"For large-scale production scenarios, Garnet's memory usage needs to be tuned to make optimal use",source:"@site/docs/getting-started/memory.md",sourceDirName:"getting-started",slug:"/getting-started/memory",permalink:"/garnet/docs/getting-started/memory",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/getting-started/memory.md",tags:[],version:"current",frontMatter:{id:"memory",sidebar_label:"Memory",title:"Managing memory usage of Garnet"},sidebar:"garnetDocSidebar",previous:{title:"Configuration",permalink:"/garnet/docs/getting-started/configuration"},next:{title:"Security",permalink:"/garnet/docs/security"}},d={},a=[{value:"Main Store",id:"main-store",level:2},{value:"Index Size",id:"index-size",level:3},{value:"Log Size",id:"log-size",level:3},{value:"Overflow buckets",id:"overflow-buckets",level:3},{value:"Auto-Resizing Index",id:"auto-resizing-index",level:3},{value:"Object Store",id:"object-store",level:2},{value:"Log Size (Object Store)",id:"log-size-object-store",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"memory-usage",children:"Memory Usage"})}),"\n",(0,s.jsxs)(n.p,{children:["For large-scale production scenarios, Garnet's memory usage needs to be tuned to make optimal use\nof available memory on a machine. Here, we discuss the components of memory, and how to tune them.\nConfiguration parameters are listed ",(0,s.jsx)(n.a,{href:"configuration",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Garnet is designed as two storage instances of Tsavorite: the main store and the object store. Each one is independently configured for memory. If you use only raw strings (e.g., ",(0,s.jsx)(n.code,{children:"GET"}),", ",(0,s.jsx)(n.code,{children:"SET"})," and their variants), ",(0,s.jsx)(n.code,{children:"HYPERLOGLOG"}),", and ",(0,s.jsx)(n.code,{children:"BITMAP"})," commands, you should disable the object store using the ",(0,s.jsx)(n.code,{children:"DisableObjects"})," (",(0,s.jsx)(n.code,{children:"--no-obj"}),") parameter. This will avoid wasting memory for the object store."]}),"\n",(0,s.jsx)(n.h2,{id:"main-store",children:"Main Store"}),"\n",(0,s.jsx)(n.p,{children:"Memory used by the main store consists of the sum of three components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Index size"}),"\n",(0,s.jsx)(n.li,{children:"Log size"}),"\n",(0,s.jsx)(n.li,{children:"Overflow buckets"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"index-size",children:"Index Size"}),"\n",(0,s.jsxs)(n.p,{children:["The index size is configured using the ",(0,s.jsx)(n.code,{children:"IndexSize"})," (",(0,s.jsx)(n.code,{children:"-i"})," or ",(0,s.jsx)(n.code,{children:"--index"}),") parameter. It specifies the total size in bytes\nthat the index occupies in main memory. The index is organized as hash buckets, where each bucket is 64 bytes long, i.e.,\nthe size of a cache line. The bucket holds 7 entries and a pointer to an overflow bucket, described ",(0,s.jsx)(n.a,{href:"#overflow-buckets",children:"below"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The rule of thumb for sizing the index is: if you expect the cache-store to hold K keys, set the size to ",(0,s.jsx)(n.code,{children:"K * 16"})," bytes. The\nreasoning for this is:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We want buckets to be half full on average, so around 4 keys per bucket"}),"\n",(0,s.jsxs)(n.li,{children:["Therefore, with K keys, we want ",(0,s.jsx)(n.code,{children:"K / 4"})," buckets"]}),"\n",(0,s.jsx)(n.li,{children:"Each bucket takes up 64 bytes"}),"\n",(0,s.jsxs)(n.li,{children:["So, the total size is ",(0,s.jsx)(n.code,{children:"64 * (K / 4) = K * 16"})," bytes"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"log-size",children:"Log Size"}),"\n",(0,s.jsxs)(n.p,{children:["The index described above does not hold keys or values. Instead, both keys and values are stored in a separate structure\ncalled the hybrid log. The memory occupied by the log is configured using ",(0,s.jsx)(n.code,{children:"MemorySize"})," (",(0,s.jsx)(n.code,{children:"-m"})," or ",(0,s.jsx)(n.code,{children:"--memory"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Memory is organized as a circular buffer of pages, where each page has size cofigured using ",(0,s.jsx)(n.code,{children:"PageSize"})," (",(0,s.jsx)(n.code,{children:"-p"})," or ",(0,s.jsx)(n.code,{children:"--page"}),"). The page\nsize controls the maximum key or value size you can store, as a record needs to fit entirely within a page."]}),"\n",(0,s.jsx)(n.p,{children:"A record in the Garnet main store consists of:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An 8-byte header, called ",(0,s.jsx)(n.code,{children:"RecordInfo"}),", which holds metadata and the logical address of the previous entry in a record chain."]}),"\n",(0,s.jsxs)(n.li,{children:["The key, which consists of an 8-byte header followed the the key bytes (",(0,s.jsx)(n.code,{children:"SpanByte"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["The value, which consists of an 8-byte header followed the the value bytes (",(0,s.jsx)(n.code,{children:"SpanByte"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"overflow-buckets",children:"Overflow buckets"}),"\n",(0,s.jsxs)(n.p,{children:["Each hash bucket has 7 entries (slots) that store the root of a chain of records stored in the log. If the hash bucket for\na given key is full, we overflow into extra buckets called overflow buckets that are allocated dynamically. While these\ncannot be controlled or bounded, they are typically very small and can be ignored. In case, your index was sized too small,\nthey can take up more space, and to combat this, you can dynamically grow the index as described ",(0,s.jsx)(n.a,{href:"#auto-resizing-index",children:"below"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"auto-resizing-index",children:"Auto-Resizing Index"}),"\n",(0,s.jsxs)(n.p,{children:["You can configure Garnet to automatically grow the index (doubling each time) as it fills up. This is done by\nconfiguring ",(0,s.jsx)(n.code,{children:"IndexResizeFrequencySecs"})," (",(0,s.jsx)(n.code,{children:"--index-resize-freq"}),") to specify how frequently to trigger the\nresizing check. Index growth is triggered if the number of overflow buckets exceeds a specified percentage\nof the total number of main hash buckets. This threshold is specified using ",(0,s.jsx)(n.code,{children:"IndexResizeThreshold"})," (",(0,s.jsx)(n.code,{children:"--index-resize-threshold"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["We also support ",(0,s.jsx)(n.code,{children:"IndexMaxSize"})," (",(0,s.jsx)(n.code,{children:"--index-max-size"}),") which identifies the maximum size until which the index\nwill grow in size. We do not support index size shrinking at this point."]}),"\n",(0,s.jsx)(n.h2,{id:"object-store",children:"Object Store"}),"\n",(0,s.jsx)(n.p,{children:"The index and overflow buckets are managed similarly to the main store, and the corresponding parameters\nare:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ObjectStoreIndexSize"})," (",(0,s.jsx)(n.code,{children:"--obj-index"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ObjectStoreIndexMaxSize"})," (",(0,s.jsx)(n.code,{children:"--obj-index-max-size"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"However, the log memory is handled differently, as described below."}),"\n",(0,s.jsx)(n.h3,{id:"log-size-object-store",children:"Log Size (Object Store)"}),"\n",(0,s.jsxs)(n.p,{children:["In case of the object store, the hybrid log holds ",(0,s.jsx)(n.em,{children:"references"})," to keys and values (which are objects), rather\nthan the actual keys and values themselves. The memory occupied by the object store log is configured using\n",(0,s.jsx)(n.code,{children:"ObjectStoreLogMemorySize"})," (",(0,s.jsx)(n.code,{children:"--obj-log-memory"}),"). However, this parameter only controls the number of records\nin the object store, where each record consists of:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An 8-byte header, called ",(0,s.jsx)(n.code,{children:"RecordInfo"}),", which holds metadata and the logical address of the previous entry in a record chain."]}),"\n",(0,s.jsx)(n.li,{children:"An 8-byte reference to the key object, which is a byte array on heap (byte[])"}),"\n",(0,s.jsxs)(n.li,{children:["An 8-byte reference to the value object, which is an ",(0,s.jsx)(n.code,{children:"IGarnetObject"})," instance, which could be different object types such as SortedSet, Hash, Set, etc."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In other words, when you set ",(0,s.jsx)(n.code,{children:"ObjectStoreLogMemorySize"}),", you are only controlling the number of records in\nmemory, and not the total memory usage of the objects. Specifically, since each record is 24 bytes long,\nsetting ",(0,s.jsx)(n.code,{children:"ObjectStoreLogMemorySize"})," to S merely implies that you can hold at most ",(0,s.jsx)(n.code,{children:"S / 24"})," records in main\nmemory."]}),"\n",(0,s.jsxs)(n.p,{children:["This means, of course, that we need to track the total memory using a different mechanism. For this, Garnet\nexposes a configuration called ",(0,s.jsx)(n.code,{children:"ObjectStoreHeapMemorySize"})," (",(0,s.jsx)(n.code,{children:"--obj-heap-memory"}),") which represents the heap memory\nused by key byte arrays and the ",(0,s.jsx)(n.code,{children:"IGarnetObject"})," instances in bytes. You can use this parameter in combination with the ",(0,s.jsx)(n.code,{children:"--obj-log-memory"}),"\nto control the total memory used by the object store."]}),"\n",(0,s.jsx)(n.p,{children:"To summarize, the total space occupied by the object store is the sum of:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Object store index size (and overflow buckets), as before"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ObjectStoreLogMemorySize"})," (",(0,s.jsx)(n.code,{children:"--obj-log-memory"}),") which controls the maximum ",(0,s.jsx)(n.em,{children:"number"})," of records in memory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ObjectStoreHeapMemorySize"})," (",(0,s.jsx)(n.code,{children:"--obj-heap-memory"}),") which controls the total heap size occupied by the objects."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var s=o(6540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);