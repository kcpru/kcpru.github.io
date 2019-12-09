(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3149e4fc"],{4587:function(n,e,a){"use strict";a.r(e);var t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-content",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},[n._l(n.cards,(function(e){return a("Card",n._b({key:e.title},"Card",e,!1))})),a("Implementation",{attrs:{implement:n.implement}}),a("CardImage",{attrs:{images:n.images}})],2)],1)],1)},r=[],i=a("5b44"),o=a("ae8d"),s=a("b7d0"),l={name:"Insertionsort",components:{Card:o["a"],CardImage:i["a"],Implementation:s["a"]},data:function(){return{cards:[{title:"Insertion Sort",subtitle:"Sortowanie przez wstawianie",flex:12,content:"Jeden z najprostszych algorytmów sortowania, którego zasada działania odzwierciedla sposób w jaki ludzie ustawiają karty – kolejne elementy wejściowe są ustawiane na odpowiednie miejsca docelowe. Jest efektywny dla niewielkiej liczby elementów, jego złożoność wynosi O(n<sup>2</sup>). Pomimo tego, że jest znacznie mniej wydajny od algorytmów takich jak quicksort czy heapsort, posiada pewne zalety:</br>\n\n1. liczba wykonanych porównań jest zależna od liczby inwersji w permutacji, dlatego algorytm jest wydajny dla danych wstępnie posortowanych, </br>\n2. jest wydajny dla zbiorów o niewielkiej liczebności,</br>\n3. jest stabilny.</br></br>\nIstnieje modyfikacja algorytmu, pozwalająca zmniejszyć liczbę porównań. Zamiast za każdym razem iterować po już posortowanym fragmencie (etap wstawiania elementu), można posłużyć się wyszukiwaniem binarnym. Pozwala to zmniejszyć liczbę porównań do O(n log<sub>n</sub>), nie zmienia się jednak złożoność algorytmu, ponieważ liczba przesunięć elementów to nadal O(n<sup>2</sup>)."},{title:"Schemat działania algorytmu",subtitle:"",flex:12,content:"1. Utwórz zbiór elementów posortowanych i przenieś do niego dowolny element ze zbioru nieposortowanego.</br>\n2. Weź dowolny element ze zbioru nieposortowanego.</br>\n3. Wyciągnięty element porównuj z kolejnymi elementami zbioru posortowanego, póki nie napotkasz elementu równego lub elementu większego (jeśli chcemy otrzymać ciąg niemalejący) lub nie znajdziemy się na początku/końcu zbioru uporządkowanego.</br>\n4. Wyciągnięty element wstaw w miejsce, gdzie skończyłeś porównywać.</br>\n5. Jeśli zbiór elementów nieuporządkowanych jest niepusty, wróć do punktu 2."}],implement:[{lang:"c++",code:'#include <iostream>\n\nusing namespace std;\n\nconst int n = 10;\nint t[n] = {2,8,3,9,4,0,5,6,1,7};\n\nvoid print(int t[], int n)\n{\n    for(int i=0; i<n; i++)cout<<t[i] << " ";\n    cout<<endl;\n}\n\nvoid insertionSort(int t[],int n)\n{\n    int k, key, ptr;\n    for (k = 1; k < n; k++)\n    {\n        key = t[k];\n        ptr = k - 1;\n        while (ptr >= 0 && t[ptr] > key)\n        {\n            t[ptr + 1] = t[ptr];\n            ptr = ptr - 1;\n        }\n        t[ptr + 1] = key;\n    }\n}\n\nint main()\n{\n    print(t, n);\n\n    insertionSort(t,n);\n    print(t, n);\n\n    return 0;\n}\n'},{lang:"python",code:'def merge(arr, l, m, r): \n    n1 = m - l + 1\n    n2 = r- m \n  \n    # create temp arrays \n    L = [0] * (n1) \n    R = [0] * (n2) \n  \n    # Copy data to temp arrays L[] and R[] \n    for i in range(0 , n1): \n        L[i] = arr[l + i] \n  \n    for j in range(0 , n2): \n        R[j] = arr[m + 1 + j] \n  \n    # Merge the temp arrays back into arr[l..r] \n    i = 0     # Initial index of first subarray \n    j = 0     # Initial index of second subarray \n    k = l     # Initial index of merged subarray \n  \n    while i < n1 and j < n2 : \n        if L[i] <= R[j]: \n            arr[k] = L[i] \n            i += 1\n        else: \n            arr[k] = R[j] \n            j += 1\n        k += 1\n  \n    # Copy the remaining elements of L[], if there \n    # are any \n    while i < n1: \n        arr[k] = L[i] \n        i += 1\n        k += 1\n  \n    # Copy the remaining elements of R[], if there \n    # are any \n    while j < n2: \n        arr[k] = R[j] \n        j += 1\n        k += 1\n  \n# l is for left index and r is right index of the \n# sub-array of arr to be sorted \ndef mergeSort(arr,l,r): \n    if l < r: \n  \n        # Same as (l+r)/2, but avoids overflow for \n        # large l and h \n        m = (l+(r-1))/2\n  \n        # Sort first and second halves \n        mergeSort(arr, l, m) \n        mergeSort(arr, m+1, r) \n        merge(arr, l, m, r) \n  \n  \n# Driver code to test above \narr = [12, 11, 13, 5, 6, 7] \nn = len(arr) \nprint ("Given array is") \nfor i in range(n): \n    print ("%d" %arr[i]), \n  \nmergeSort(arr,0,n-1) \nprint ("Sorted array is") \nfor i in range(n): \n    print ("%d" %arr[i]), \n  '}],images:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Insertion_sort_animation.gif/240px-Insertion_sort_animation.gif",alt:"Gif obrazujący działanie sortowania przez wstawianie"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Insertion-sort-example-300px.gif/220px-Insertion-sort-example-300px.gif",alt:"Gif obrazujący działanie sortowania przez wstawianie"}]}}},m=l,d=a("2877"),c=a("6544"),p=a.n(c),w=a("a523"),u=a("a75b"),y=a("0fd9b"),z=Object(d["a"])(m,t,r,!1,null,null,null);e["default"]=z.exports;p()(z,{VContainer:w["a"],VContent:u["a"],VRow:y["a"]})},"5b44":function(n,e,a){"use strict";var t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[a("v-card-title",[n._v("Obrazy")]),a("v-row",{attrs:{dense:""}},[n._l(n.images,(function(n){return a("v-col",{key:n.src,staticClass:"d-sm-none",attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:"","max-width":"95%"}},[a("v-img",{attrs:{alt:n.alt,src:n.src,"max-width":"60%"}})],1)],1)})),n._l(n.images,(function(n){return a("v-col",{key:n.src+"-sm",staticClass:"d-none d-sm-block",attrs:{cols:"6"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:"","max-width":"95%"}},[a("v-img",{attrs:{alt:n.alt,src:n.src}})],1)],1)}))],2)],1)],1)},r=[],i={name:"CardImage",props:{images:{type:Array}}},o=i,s=a("2877"),l=a("6544"),m=a.n(l),d=a("b0af"),c=a("99d9"),p=a("62ad"),w=a("adda"),u=a("0fd9b"),y=Object(s["a"])(o,t,r,!1,null,null,null);e["a"]=y.exports;m()(y,{VCard:d["a"],VCardTitle:c["c"],VCol:p["a"],VImg:w["a"],VRow:u["a"]})}}]);
//# sourceMappingURL=chunk-3149e4fc.fec4dee3.js.map