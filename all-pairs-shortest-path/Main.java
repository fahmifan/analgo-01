// Java program to multiply two square 
// matrices. 
import java.io.*; 
  
public class Main { 
  static int N = 6; 
      
    static int[][] multiply(int mat1[][], int mat2[][]) 
    { 
        int i, j, k; 
        int[][] res = new int[N][N];
        for (i = 0; i < N; i++) 
        { 
            for (j = 0; j < N; j++) 
            { 
                res[i][j] = 0; 
                for (k = 0; k < N; k++) 
                    res[i][j] += mat1[i][k] * mat2[k][j]; 
            } 
        }

        return res;
    }
    
    static int[][] xShortPath(int L[][], int W[][]) 
    { 
        int i, j, k; 
        int[][] res = new int[N][N];
        for (i = 0; i < N; i++) { 
            for (j = 0; j < N; j++) { 
                res[i][j] = 999;
                for (k = 0; k < N; k++) {
                    int min = Integer.min(res[i][j], L[i][k] + W[k][j]);
                    res[i][j] = min;
                }

                String print = res[i][j] > 900 ? "~" : res[i][j] + "";
                System.out.print( print + "  ");
            }

            System.out.println("\n");
        }

        System.out.println("\n");
        return res;
    }
  
    public static void main (String[] args)  
    { 
        int M = 999;
        // int W[][] = { 
        //     { 0, 3, 8, M, -4},
        //     { M, 0, M, 1, 7 },
        //     { M, 4, 0, M, M },
        //     { 2, M, -5, 0, M},
        //     { M, M, M, 6, 0 } 
        // };
  
        int W[][] = { 
            { 0, M, M, M, -1, M},
            { 1, 0, M, 2, M, M},
            { M, 2, 0, M, M, -8},
            { -4, M, M, 0, 3, M},
            { M, 7, M, M, 0, M},
            {M, 5, 10, M, M, 0} 
        };

        // Slow All-Pairs Shortest Path
        System.out.println("Slow All-Pairs Shortest Path");
        int L[][] = new int[N][N];
        L = W;
        for (int i = 1; i < N-1; i++) {
            L = xShortPath(L, W);
        }

        // Fast All-Pairs Shortest Path
        System.out.println("\n\nFast All-Pairs Shortest Path");
        L = new int[N][N];
        L = W;
        for (int i = 1; i < N-2; i++) {
            L = xShortPath(L, L);
        }
    } 
} 
