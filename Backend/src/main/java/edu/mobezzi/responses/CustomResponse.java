package edu.mobezzi.responses;

@FunctionalInterface
public interface CustomResponse<T> {
	public T getResponse();
}
