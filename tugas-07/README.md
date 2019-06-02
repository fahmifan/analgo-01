# Tugas 07

## Soal 01: 
### Algoritma
```
matrix-multiply(a,b)
//ncolumns = number of collumn
//nrows = number of rows
if ncolumns[A] =/= nrows[B]
  then error "incompatible dimensions"
  else for i<-1 to nrows[A]
         do for j<-1 to ncolumns[B]
              do C[i,j] <-0
                for k<-1 to ncolumns[A]
                  do C[i,j] <- C[i,j] + A[i,k].B[k,j]
    return C


//nkolom = panjang kolom
//nbaris = panjang baris
```
![exec soal 1][soal-01]

## Soal 02:
### Algoritma
```
lcs-length(x,y)
m<-length[x]
n<-length[y]
for i<-1 to m do c[i,0]<-0
for j<-0 to n do c[0,j]<-0
for i<-1 to m
  do for j<-1 to n
       do if xi==yj
            then c[i,j]<-c[i-1,j-1]+1
                 b[i,j]<-"panahkiriatas"
            else if c[i-1,j]>=c[i,j-1]
                   then c[i,j]<-c[i-1,j]
                        b[i,j]<-"panahatas"
                   else c[i,j]<-c[i,j-1]
                        b[i,j]<-"panahkiri"
return c and b
```
![exec soal 2][soal-02]


[soal-01]: https://github.com/miun173/analgo-01/blob/master/tugas-07/soal-01.png
[soal-02]: https://github.com/miun173/analgo-01/blob/master/tugas-07/soal-02.png