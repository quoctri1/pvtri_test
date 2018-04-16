CXX=g++ 
CXXFLAGS=-O3 -Wall
INCLUDES=
BIN=stringcxx

SRCS=stringcxx.o

%.o : %.c
	$(CXX) $(CXXFLAGS) $(INCLUDES) $< -c -o $@

OBJS   = $(patsubst %.cpp,%.o,$(SRCS))

$(BIN): $(OBJS)
	$(CXX) $(CXXFLAGS) $(OBJS) -o $(BIN)

clean:
	rm -f $(OBJS) $(BIN)
