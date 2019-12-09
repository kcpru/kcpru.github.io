(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-314a45d5"],{5020:function(n,e,a){"use strict";a.r(e);var i=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-content",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},[n._l(n.cards,(function(e){return a("Card",n._b({key:e.title},"Card",e,!1))})),a("Implementation",{attrs:{implement:n.implement}}),a("CardImage",{attrs:{images:n.images}})],2)],1)],1)},t=[],r=a("5b44"),o=a("ae8d"),s=a("b7d0"),c={name:"Mergesort",components:{Card:o["a"],CardImage:r["a"],Implementation:s["a"]},data:function(){return{cards:[{title:"Merge Sort",subtitle:"Sortowanie przez scalanie",flex:12,content:"Wyróżnić można trzy podstawowe kroki:<br />\n          1. Podziel zestaw danych na dwie równe części.<br />\n          2. Zastosuj sortowanie przez scalanie dla każdej z nich oddzielnie, chyba że pozostał już tylko jeden element.<br />\n          3. Połącz posortowane podciągi w jeden ciąg posortowany."},{title:"Opis",subtitle:"",flex:12,content:'W algorytmie sortowania przez scalanie jest wykorzystywana strategia "dziel i zwyciężaj". Jest to bardzo efektywna technika algorytmiczna (wykorzystana jest także w algorytmie sortowania "szybkiego").</br>\n\nWyobraźmy sobie, że mamy dwa uporządkowane ciągi, a chcemy utworzyć z nich jeden – także uporządkowany. Można oczywiście potraktować je jako jeden ciąg i posortować jedną ze znanych metod, ale nie zostanie wykorzystane uporządkowanie obu ciągów. Warto zastosować następujący sposób:</br>\n\n1. Porównujemy ze sobą pierwsze elementy z każdego z ciągów danych.</br>\n2. Mniejszy element wstawiamy do nowego ciągu i usuwamy z ciągu danych.</br>\n3. Powtarzamy te czynności, aż oba ciągi danych będą puste.</br></br>\nW ten sposób, w nowo utworzonym ciągu wszystkie elementy są uporządkowane, a co najważniejsze operacja ta wymaga wykonania niewielu porównań.\nWiadomo już, jak z dwóch uporządkowanych ciągów otrzymać jeden. Wykorzystując to, można sformułować algorytm sortowania dowolnego ciągu:</br>\n\n1. Podziel ciąg na dwie równe części (jeśli ciąg ma nieparzystą liczbę elementów, jedna z części będzie miała o jeden element więcej).</br>\n2. Każdą z części uporządkuj.</br>\n3. Połącz dwa uporządkowane ciągi w jeden ciąg uporządkowany.</br></br>\nPozostaje jeszcze rozstrzygnąć, w jaki sposób posortować każdy z dwóch podciągów? W odpowiedzi zawiera się cała siła tego algorytmu: w ten sam sposób! Po prostu wywołujemy rekurencyjnie ten sam algorytm dla każdego z podciągów. Aby takie postępowanie nie przebiegało w nieskończoność należy określić, kiedy zaprzestajemy podziału ciągu. Następuje to, gdy sortowany ciąg ma mniej niż dwa elementy. Ostatecznie algorytm ma następującą postać:\nJeśli ciąg zawiera więcej niż jeden element, to podziel go na dwie równe części (lub prawie równe, jeśli ciąg ma nieparzystą liczbę elementów).\nPosortuj pierwszą część stosując ten sam algorytm.\nPosortuj drugą część stosując ten sam algorytm.\nPołącz dwa uporządkowane ciągi w jeden ciąg uporządkowany.'}],implement:[{lang:"c++",code:'#include <iostream>\n\nusing namespace std;\n\nconst int n = 10;\nint t[n] = {9,0,8,5,6,4,1,2,3,7};\n\nvoid print(int t[], int n){\n    for(int i=0; i<n; i++) cout << t[i] << " ";\n    cout << endl;\n}\n\nvoid mergeSort(int t[], int n){\n\n    if(n<2) return;\n\n    // PODZIA£ TABLICY NA DZIW PO£OWY\n    int n1=n/2;// ILOŒÆ ELEMENTÓW W TABLICY t1\n    int n2=n-n1;// ILOŒÆ ELEMENTÓW W TABLICY t2\n\n    int *t1 = new int[n1];\n    int *t2 = new int[n2];\n\n    int i=0;\n    for(int i1=0; i1<n1; i1++, i++) t1[i1]=t[i];\n    for(int i2=0; i2<n2; i2++, i++) t2[i2]=t[i];\n\n    // print(t1, n1);\n    // print(t2, n2);\n\n    // SORTOWANIE PO£ÓWEK\n    mergeSort(t1, n1);\n    mergeSort(t2, n2);\n\n    // SCALANIE PO£ÓWEK\n    int i1=0; // LICZBA ELEMENTÓW PRZEPISANYCH Z TABLICY t1\n    int i2=0; // LICZBA ELEMENTÓW PRZEPISANYCH Z TABLICY t2\n    for(int i=0; i<n; i++){\n        if(i1==n1){\n            t[i]=t2[i2];\n            i2++;\n            continue;\n        }\n\n        if(i2==n2){\n            t[i]=t1[i1];\n            i1++;\n            continue;\n        }\n\n        if(t1[i1]<t2[i2]) {\n            t[i]=t1[i1];\n            i1++;\n        } else {\n            t[i]=t2[i2];\n            i2++;\n        }\n    }\n}\n\nint main()\n{\n    print(t, n);\n    mergeSort(t, n);\n    print(t, n);\n    return 0;\n}'},{lang:"python",code:'def merge(arr, l, m, r): \n    n1 = m - l + 1\n    n2 = r- m \n  \n    # create temp arrays \n    L = [0] * (n1) \n    R = [0] * (n2) \n  \n    # Copy data to temp arrays L[] and R[] \n    for i in range(0 , n1): \n        L[i] = arr[l + i] \n  \n    for j in range(0 , n2): \n        R[j] = arr[m + 1 + j] \n  \n    # Merge the temp arrays back into arr[l..r] \n    i = 0     # Initial index of first subarray \n    j = 0     # Initial index of second subarray \n    k = l     # Initial index of merged subarray \n  \n    while i < n1 and j < n2 : \n        if L[i] <= R[j]: \n            arr[k] = L[i] \n            i += 1\n        else: \n            arr[k] = R[j] \n            j += 1\n        k += 1\n  \n    # Copy the remaining elements of L[], if there \n    # are any \n    while i < n1: \n        arr[k] = L[i] \n        i += 1\n        k += 1\n  \n    # Copy the remaining elements of R[], if there \n    # are any \n    while j < n2: \n        arr[k] = R[j] \n        j += 1\n        k += 1\n  \n# l is for left index and r is right index of the \n# sub-array of arr to be sorted \ndef mergeSort(arr,l,r): \n    if l < r: \n  \n        # Same as (l+r)/2, but avoids overflow for \n        # large l and h \n        m = (l+(r-1))/2\n  \n        # Sort first and second halves \n        mergeSort(arr, l, m) \n        mergeSort(arr, m+1, r) \n        merge(arr, l, m, r) \n  \n  \n# Driver code to test above \narr = [12, 11, 13, 5, 6, 7] \nn = len(arr) \nprint ("Given array is") \nfor i in range(n): \n    print ("%d" %arr[i]), \n  \nmergeSort(arr,0,n-1) \nprint ("Sorted array is") \nfor i in range(n): \n    print ("%d" %arr[i]), \n  '}],images:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Merge_sort_animation2.gif/240px-Merge_sort_animation2.gif",alt:"Gif obrazujący działanie sortowania scalanie"},{src:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif",alt:"Gif obrazujący działanie sortowania scalanie"},{src:"https://upload.wikimedia.org/wikipedia/commons/6/60/Mergesort_algorithm_diagram.png",alt:"Zdjęcie obrazujące działanie sortowania przez scalanie"}]}}},d=c,l=a("2877"),m=a("6544"),w=a.n(m),u=a("a523"),g=a("a75b"),z=a("0fd9b"),p=Object(l["a"])(d,i,t,!1,null,null,null);e["default"]=p.exports;w()(p,{VContainer:u["a"],VContent:g["a"],VRow:z["a"]})},"5b44":function(n,e,a){"use strict";var i=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[a("v-card-title",[n._v("Obrazy")]),a("v-row",{attrs:{dense:""}},[n._l(n.images,(function(n){return a("v-col",{key:n.src,staticClass:"d-sm-none",attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:"","max-width":"95%"}},[a("v-img",{attrs:{alt:n.alt,src:n.src,"max-width":"60%"}})],1)],1)})),n._l(n.images,(function(n){return a("v-col",{key:n.src+"-sm",staticClass:"d-none d-sm-block",attrs:{cols:"6"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:"","max-width":"95%"}},[a("v-img",{attrs:{alt:n.alt,src:n.src}})],1)],1)}))],2)],1)],1)},t=[],r={name:"CardImage",props:{images:{type:Array}}},o=r,s=a("2877"),c=a("6544"),d=a.n(c),l=a("b0af"),m=a("99d9"),w=a("62ad"),u=a("adda"),g=a("0fd9b"),z=Object(s["a"])(o,i,t,!1,null,null,null);e["a"]=z.exports;d()(z,{VCard:l["a"],VCardTitle:m["c"],VCol:w["a"],VImg:u["a"],VRow:g["a"]})}}]);
//# sourceMappingURL=chunk-314a45d5.4c27f4a4.js.map