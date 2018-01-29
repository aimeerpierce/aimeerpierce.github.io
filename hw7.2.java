
class Peg{
	double width;
	public Peg(double width) {
		this.width = width;
	}
}


class SquarePeg extends Peg{
	public SquarePeg (double width) {
		super(width) = width;
	}
	public double getWidth() {
		return width;
	}
}
class RoundPeg extends Peg{
	public RoundPeg (double radius) {
		super(width) = radius;
	}
	public double getRadius() {
		return radius; }
}

class RoundHole{
	double radius;
	boolean pegFits(Peg peg) {
		return peg.getRadius() <= radius;
	}
}
